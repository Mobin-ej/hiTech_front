import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('توکن یافت نشد. لطفاً وارد شوید.');
        }

        console.log('توکن ارسال شده:', token);

        const response = await fetch('http://185.208.175.233:5001/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        console.log('وضعیت پاسخ:', response.status); 

        if (!response.ok) {
          throw new Error(`خطا در دریافت اطلاعات: ${response.statusText} (کد: ${response.status})`);
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token'); 
    navigate('/');
  };

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>خطا: {error}</div>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
      position: 'relative',
    }}>
      <Navbar />
      {profileData ? (
        <div style={{
          width: '400px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          textAlign: 'right',
          direction: 'rtl',
          position: 'relative',
        }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>اطلاعات کاربری:</h2>
          <p><strong>نام:</strong> {profileData.name}</p>
          <p><strong>نام خانوادگی:</strong> {profileData.last_name}</p>
          <p><strong>شغل:</strong> {profileData.job}</p>
          <p><strong>شهر:</strong> {profileData.city}</p>
          <p><strong>شماره تلفن:</strong> {profileData.phone_number}</p>
          <p><strong>آدرس منزل:</strong> {profileData.home_address}</p>
          <p><strong>تحصیلات:</strong> {profileData.education}</p>
          <p><strong>ایمیل:</strong> {profileData.email}</p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}>
            <button 
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              ویرایش
            </button>
            <button 
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              خروج
            </button>
          </div>
        </div>
      ) : (
        <div>اطلاعاتی برای نمایش وجود ندارد.</div>
      )}
    </div>
  );
};

export default Information;
