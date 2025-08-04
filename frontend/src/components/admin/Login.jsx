import React from 'react';
import Layout from '../common/Layout';
import { useForm } from 'react-hook-form';
import { apiUrl } from '../common/Http';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



const navigate=useNavigate();

 const onSubmit = async (data) => {
  console.log(data);
  try {
    const res = await fetch(`${apiUrl}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result); // 👈 Debug output

    if (result.status == 200) {
      const adminInfo = {
        token: result.token,
        id: result.id,
        name: result.name,
      };
      localStorage.setItem("adminInfo", JSON.stringify(adminInfo));

      navigate('/admin/dashboard'); // ✅ Navigate on success
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.error('Login Error:', error);
    toast.error("Something went wrong!");
  }
};

  return (
    <Layout>
      <div className="container d-flex justify-content-center">
        <div className="card shadow-lg border-1 col-4 my-5">
          <div className="card-body p-4">
            <h3>Admin Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Email :</label>
                <input
                  {...register('email', {
                    required: 'The Email Field Is Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email Address',
                    },
                  })}
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="invalid-feedback">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password :</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                {errors.password && (
                  <p className="invalid-feedback">{errors.password.message}</p>
                )}
              </div>

              <button className="btn btn-outline-dark">Login</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
