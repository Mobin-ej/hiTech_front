import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Ivent from "./Ivent";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const [eventId, setEventId] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendanceCount, setAttendanceCount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          throw new Error("توکن یافت نشد. لطفاً وارد شوید.");
        }

        const response = await fetch(
          "http://185.208.175.233:5001/api/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `خطا در دریافت اطلاعات: ${response.statusText} (کد: ${response.status})`
          );
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
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const handleEdit = () => {
    navigate("/edit", { state: { profileData } });
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `http://185.208.175.233:5001/api/latest-event`
        );
        if (response.ok) {
          const data = await response.json();
          setEventId(data.id);
        } else {
          console.error("Error fetching event data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEventData();
  }, []);

  const handleRegisterAttendance = async () => {
    if (!eventId) {
      alert("هیچ رویدادی انتخاب نشده است.");
      return;
    }
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw new Error("توکن یافت نشد. لطفاً وارد شوید.");
      }

      const response = await fetch(
        "http://185.208.175.233:5001/register-attendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            event_id: eventId,
            attendees_count: attendanceCount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `خطا در ثبت اطلاعات: ${response.statusText} (کد: ${response.status})`
        );
      }

      alert("حضور با موفقیت ثبت شد!");
    } catch (err) {
      alert(`خطا: ${err.message}`);
    }
  };

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>خطا: {error}</div>;
  }

  const fontStyle = {
    "@font-face": {
      fontFamily: "BNazanin",
      src: `url('/fonts/BNazanin.ttf') format('truetype')`,
    },
    fontFamily: "BNazanin, Arial, sans-serif",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      <Navbar />
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        {profileData ? (
          <div
            style={{
              width: "400px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              textAlign: "right",
              direction: "rtl",
              marginTop: "100px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                ...fontStyle,
                marginBottom: "20px",
                color: "#333",
              }}
            >
              اطلاعات کاربری:
            </h2>
            <p>
              <strong>نام:</strong> {profileData.name}
            </p>
            <p>
              <strong>نام خانوادگی:</strong> {profileData.last_name}
            </p>
            <p>
              <strong>شغل:</strong> {profileData.job}
            </p>
            <p>
              <strong>شهر:</strong> {profileData.city}
            </p>
            <p>
              <strong>شماره تلفن:</strong> {profileData.phone_number}
            </p>
            <p>
              <strong>آدرس منزل:</strong> {profileData.home_address}
            </p>
            <p>
              <strong>تحصیلات:</strong> {profileData.education}
            </p>
            <p>
              <strong>ایمیل:</strong> {profileData.email}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleEdit}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "18px",
                  ...fontStyle,
                }}
              >
                ویرایش
              </button>
              <button
                onClick={handleLogout}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "18px",
                  ...fontStyle,
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

      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "120px", // اضافه کردن فاصله از بالا
        }}
      >
        <Ivent onEventIdChange={setEventId} />
        <select
          value={attendanceCount}
          onChange={(e) => setAttendanceCount(Number(e.target.value))}
          style={{
            margin: "20px 0",
            padding: "10px",
            fontSize: "19px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            ...fontStyle, // اعمال استایل فونت
          }}
        >
          <option value="" disabled>
            تعداد مهمان
          </option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          onClick={handleRegisterAttendance}
          className="ml-4 mr-4 px-6 py-1 font-BNazanin text-[#4A628A] text-xl border-2 bg-[#B9E5E8] rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 active:scale-90"
          style={{ marginTop: "20px" }}
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Information;
