export default function Home() {
    return (
        <main className="p-8 text-center space-y-6">
            <h1 className="text-3xl font-bold">AI Business Coach</h1>
            <p>Get personalized insights for your business.</p>
            <div className="space-x-4">
                <a href="/signup"  className="btn-primary">Signup</a>
                <a href="/pricing" className="btn-primary">Pricing</a>
            </div>
        </main>
    );
}
