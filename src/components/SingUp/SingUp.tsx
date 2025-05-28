import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';
import eye from '../../assets/Image/Union.png';
import { useNavigate } from 'react-router-dom';
import styles from './SingUp.module.scss'
interface SingUpProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SingUp: React.FC<SingUpProps> = ({ onClose, onSwitchToSignIn }) => {
  const { setUser } = useUser(); 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateFullName = (name: string): [string, string] => {
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length < 2) {
      throw new Error('Пожалуйста, введите имя и фамилию через пробел');
    }
    return [nameParts[0], nameParts.slice(1).join(' ')];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const [firstName, lastName] = validateFullName(fullName);

      if (password !== confirmPassword) {
        throw new Error('Пароли не совпадают');
      }

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка регистрации');
      }

      const userData = await response.json();
      setUser(userData);
      onClose();
      navigate('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.singup}>
      <button className={styles.modal_close} onClick={onClose}>
        &times;
      </button>
      
      <div className={styles.singup_modal}>
        <h3>Sign up</h3>
        <p>
          Registration takes less than a minute but gives you full control
           over your orders.
        </p>
      </div>

      <div className={styles.singup_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formleb}>
            <label htmlFor={styles.fullName}>Full Name</label>
            <div className={styles.formupr}>
              <input
                type="text"
                placeholder='Your full name'
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                pattern="^\S+(\s\S+)+$"
                title="Enter your first and last name separated by a space"
              />
            </div>
          </div>

          <div className={styles.formlebel}>
            <label htmlFor={styles.email}>Email</label>
            <div className={styles.formdup}>
              <input
                type="email"
                placeholder='Your working email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formlebel}>
            <label htmlFor={styles.password}>Password</label>
            <div className={styles.formdup}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="показать пароль"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className={styles.formlebel}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={styles.formdup}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="показать пароль"
                className="eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
          </div>

          <div className={styles.checkboxa}>
            <input 
              type="checkbox" 
              id="terms" 
              required 
              className={styles.custom_checkbox}
            />
            <label htmlFor="terms">
          Remember me
            </label>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.btn_singup}>
            <button type="submit" className={styles.submit_btn}>
          Sign up
            </button>
            <p className={styles.auth_switch}>
              Already have an account?{' '}
              <span
                onClick={onSwitchToSignIn}
                className={styles.link_btn}
              >
              Sing in
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className={styles.diviler2}></div>
      
      <div className={styles.orsign}>
        <p>Or sign in with</p>
      </div>
      
      <div className={styles.sociald2}>
         <i className={styles.social2}> 
          <FaFacebookF className={styles.solid2} />
</i>
             <i className={styles.social2}> 
          <FaGoogle className={styles.solid2} />
      </i>
           <i className={styles.social2}> 
          <FaTwitter className={styles.solid2} />
  </i>
       <i className={styles.social2}> 
          <FaLinkedinIn className={styles.solid2} />
     </i>
      </div>
    </div>
  );
};

export default SingUp;