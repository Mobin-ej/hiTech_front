import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Edit = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const { profileData } = location.state || {};

        const [formData, setFormData] = useState(profileData || {});
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleSave = async(e) => {
            e.preventDefault();
            setLoading(true);
            setError("");

            try {
                const token = localStorage.getItem("access_token");
                if (!token) {
                    throw new Error("توکن یافت نشد. لطفاً وارد شوید.");
                }

                const response = await fetch("http://185.208.175.233:5001/api/profile", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("خطا در ذخیره اطلاعات");
                }

                navigate("/information");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        return ( <
            div style = {
                {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }
            } >
            <
            h2 style = {
                { marginBottom: "20px" } } > ویرایش اطلاعات < /h2> <
            form onSubmit = { handleSave }
            style = {
                {
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    textAlign: "right",
                    direction: "rtl",
                }
            } >
            {
                Object.keys(formData).map((key) => ( <
                    div key = { key }
                    style = {
                        { marginBottom: "10px" } } >
                    <
                    label style = {
                        { display: "block", marginBottom: "5px", color: "#333" } } >
                    { key } <
                    /label> <
                    input type = "text"
                    name = { key }
                    value = { formData[key] || "" }
                    onChange = { handleInputChange }
                    style = {
                        {
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }
                    }
                    /> <
                    /div>
                ))
            } {
                error && < p style = {
                        { color: "red" } } > { error } < /p>} <
                    div
                style = {
                        {
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }
                    } >
                    <
                    button
                type = "submit"
                disabled = { loading }
                style = {
                        {
                            padding: "10px 20px",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }
                    } >
                    { loading ? "در حال ذخیره..." : "ذخیره" } <
                    /button> <
                    button
                type = "button"
                onClick = {
                    () => navigate("/information") }
                style = {
                        {
                            padding: "10px 20px",
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }
                    } >
                    انصراف <
                    /button> <
                    /div> <
                    /form> <
                    /div>
            );
        };

        export default Edit;