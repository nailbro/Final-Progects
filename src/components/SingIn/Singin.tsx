import React, { useState } from 'react';
import styles from './Singin.module.scss'
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';
import eye from '../../assets/Image/Union.png';

interface SingInProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

interface LoginResponse {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
}

const SingIn: React.FC<SingInProps> = ({ onClose, onSwitchToSignUp }) => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser({
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
      });
      onClose();
    } catch (err) {
      console.error('Login error:', err);
      setError(`err.message || 'Failed to login. Please try again.'`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.singin}>
      <button className={styles.modal_close} onClick={onClose}>
        &times;
      </button>
      <div className={styles.singin_modal}>
        <h3>Sign in</h3>
        <p>
          Sign in to your account using email and password provided
          <br />
          during registration.
        </p>
      </div>
      <div className={styles.singinform}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formlebel}>
            <label htmlFor="email">Email</label>
            <div className={styles.btn_input}>
              <input
                type="email"
                placeholder='Your working email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.singlabel}>
            <label htmlFor="password">Password</label>
            <div className={styles.btn_input}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="eye"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <div className={styles.cheked_chekbox}>
            <input type="checkbox" id="keep-signed-in" required/>
            <label htmlFor="keep-signed-in">Keep me signed in</label>
            <small className={styles.forgot}>Forgot password?</small>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.btn_singin}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={onSwitchToSignUp} className={styles.link_btn}>
                <span>Sign up</span>
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className={styles.diviler2}></div>
      <div className={styles.orsign}>
        <p>Or sign in with</p>
      </div>
      <div className={styles.sociald}>
        <i className={styles.social}><FaFacebookF className={styles.solid }/></i>
        <i className={styles.social}><FaGoogle className={styles.solid } /></i>
        <i className={styles.social}><FaTwitter className={styles.solid }/></i>
        <i className={styles.social}><FaLinkedinIn className={styles.solid } /></i>
      </div>
    </div>
  );
};

export default SingIn;