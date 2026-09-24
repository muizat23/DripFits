import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Logged in successfully!");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Account created successfully!");
      }
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMessage("");
  };

  if (user) {
    const name = user.user_metadata?.full_name;

    return (
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-brand">
            DripFits
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-heading">
            Welcome{name ? `, ${name}` : ""}
          </h1>

          <p className="mt-3 text-body">
            You're logged in to your DripFits account.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border p-6">
          <p className="text-sm text-body">
            Email
          </p>

          <p className="mt-1 font-medium text-heading">
            {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full rounded-md border border-border px-4 py-3 font-medium text-heading hover:bg-surface"
        >
          Log Out
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-md px-6 py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-brand">
          DripFits
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-heading">
          {isLogin ? "Welcome back" : "Create an account"}
        </h1>

        <p className="mt-3 text-sm text-body">
          {isLogin
            ? "Log in to your DripFits account."
            : "Sign up to create your DripFits account."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm text-heading">
              Full name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
            />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm text-heading">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-heading">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            minLength="6"
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-brand px-4 py-3 font-medium text-white hover:bg-brand-dark disabled:opacity-50"
        >
          {loading
            ? "Please wait..."
            : isLogin
            ? "Log In"
            : "Sign Up"}
        </button>
      </form>

      {message && (
        <p className="mt-5 text-center text-sm text-body">
          {message}
        </p>
      )}

      <div className="mt-6 text-center text-sm text-body">
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}

        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
          className="ml-2 font-medium text-brand hover:underline"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </div>
    </section>
  );
}