import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { ParamsDictionary } from 'express-serve-static-core';

const app = express();
const PORT = process.env.PORT || 5000;

interface Product {
  id: number;
  image?: string;
  alt?: string;
  description?: string;
  name?: string;
  imageClass?: string;
  rating?: number;
  liked: boolean;
  price: string;
}

interface SaleProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice:number;
  discountPercentage:number;
  rating: number;
}



interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  country?: string;
  zipCode?: string;
}

interface DbData {
    saleProducts?: SaleProduct[];
  trendingProducts?: Product[];
  newArrivals?: Product[];
  users?: User[];
}


app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');


const readDb = (): DbData => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { trendingProducts: [], newArrivals: [], users: [] };
  }
};

const writeDb = (data: DbData) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};

app.get('/api/trendingProducts', (req: Request, res: Response<Product[]>) => {
  const dbData = readDb();
  res.json(dbData.trendingProducts || []);
});

app.get('/api/newArrivals', (req: Request, res: Response<Product[]>) => {
  const dbData = readDb();
  res.json(dbData.newArrivals || []);
});
app.get('/api/sale-products', (req: Request, res: Response<SaleProduct[]>) => {
  const dbData = readDb();
  res.json(dbData.saleProducts || []);
});


interface RegisterBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

app.post('/api/register', async (
  req: Request<ParamsDictionary, {}, RegisterBody>, 
  res: Response<{ 
    id: number; 
    email: string; 
    firstName: string; 
    lastName: string 
  } | { message: string }>
) => {
  const { email, password, firstName, lastName } = req.body;
  
  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const dbData = readDb();
  
  if (dbData.users?.some(user => user.email === email)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: Date.now(),
      email,
      password: hashedPassword,
      firstName,
      lastName
    };

    dbData.users = [...(dbData.users || []), newUser];
    writeDb(dbData);

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

interface LoginBody {
  email: string;
  password: string;
}

app.post('/api/login', async (
  req: Request<ParamsDictionary, {}, LoginBody>, 
  res: Response<{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
  } | { message: string }>
) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const dbData = readDb();
  const user = dbData.users?.find(user => user.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

interface UpdateUserBody {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  country?: string;
  zipCode?: string;
}

app.put('/api/users/:id', (
  req: Request<{ id: string }, {}, UpdateUserBody>, 
  res: Response<{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
  } | { message: string }>
) => {
  const userId = parseInt(req.params.id);
  const updates = req.body;

  const dbData = readDb();
  const userIndex = dbData.users?.findIndex(user => user.id === userId);

  if (userIndex === undefined || userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const updatedUser = {
    ...dbData.users![userIndex],
    ...updates,
    password: dbData.users![userIndex].password
  };

  dbData.users![userIndex] = updatedUser;
  writeDb(dbData);

  res.json({
    id: updatedUser.id,
    email: updatedUser.email,
    firstName: updatedUser.firstName,
    lastName: updatedUser.lastName,
    phone: updatedUser.phone,
    address: updatedUser.address
  });
});

app.delete('/api/users/:id', (
  req: Request<{ id: string }>, 
  res: Response<{ message: string }>
) => {
  const userId = parseInt(req.params.id);
  const dbData = readDb();

  const initialLength = dbData.users?.length || 0;
  dbData.users = dbData.users?.filter(user => user.id !== userId);

  if (dbData.users?.length === initialLength) {
    return res.status(404).json({ message: 'User not found' });
  }

  writeDb(dbData);
  res.status(204).send();
});


app.listen(PORT, () => {
  console.log(`Server запущен на http://localhost:${PORT}`);
  console.log(`Trending products: http://localhost:${PORT}/api/trendingProducts`);
    console.log(`Sale products: http://localhost:${PORT}/api/sale-products`);
  console.log(`New Arrivals: http://localhost:${PORT}/api/newArrivals`);
});