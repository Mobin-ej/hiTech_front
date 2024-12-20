import React, { useEffect, useState } from 'react';

const Information = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>خطا: {error}</div>;
  }

  return (
    <div>
      {profileData ? (
        <div>
          <h2>اطلاعات کاربری:</h2>
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      ) : (
        <div>اطلاعاتی برای نمایش وجود ندارد.</div>
      )}
    </div>
  );
};

export default Information;
