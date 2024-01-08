'use client'
import { useRouter } from 'next/navigation';
export default function RegisterPage() {
	const router = useRouter();
	const goToSuccessRegister = (): void => {
		router.push('/successRegister');
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Register</h1>
			<button onClick={goToSuccessRegister}>Submit</button>
		</main>
	);
}
