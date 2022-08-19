import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../../redux/store/action/authAction'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { SubmitHandler, useForm } from 'react-hook-form'

const Login = () => {
    console.log('voa dc')

    const [error, setError] = useState(false)
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    interface RootState {
        authReducer: boolean
    }
    type FormValues = {
        email: string
        password: string
    }

    const state: any = useSelector<RootState>((state) => state.authReducer)

    const handleLogin: SubmitHandler<FormValues> = async (data: any) => {
        console.log(data)
        // e.preventDefault();
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)

                dispatch(authLogin(user))
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            })
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.currentUser))
    }, [state.currentUser])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    {...register('email', {
                                        required: 'Vui lòng nhập email',
                                    })}
                                />
                                {errors.email && <p className="messages">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Password"
                                    // onChange={(e) => setPassword(e.target.value)}
                                    {...register('password', {
                                        required: 'Vui lòng nhập mật khẩu',
                                    })}
                                />
                                {errors.password && <p className="messages">{errors.password.message}</p>}
                            </div>

                            {error && <span>Tài khoản mật khẩu không đúng</span>}
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
