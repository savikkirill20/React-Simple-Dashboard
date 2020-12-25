import React from 'react';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../utils/api';
import { useInput } from '../../hooks';

const SUCCESS_MESSAGE = 'Please check your inbox'

const RecoverPassword = () => {
    const [email, setEmail] = useInput();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        resetPassword({ email })
            .then(() => setSuccess(true))
            .catch(({ message }) => setError(message))
            .finally(() => setLoading(false))
    };
    return (
        <form className="password-setup" onSubmit={handleSubmit}>
            <h1>Recover Password</h1>
            <div className="input-container">
                <label htmlFor="email">EMAIL</label>
                <input
                    className="input"
                    id="email"
                    name="email"
                    onChange={setEmail}
                    required
                    type="email"
                    value={email}
                />
            </div>
            <div className="feedback">
                {loading && <p>Loading...</p>}
                {success && <p>{SUCCESS_MESSAGE}</p>}
                {error && <p>{error}</p>}
            </div>
            <button
                type="submit"
                className="btn btn-pink big"
                disabled={loading || success}
            >
                RECOVER
            </button>
            <div className="urls-container">
                <Link to="/auth/login">Go back</Link>
            </div>
        </form>
    );
}

export default RecoverPassword;
