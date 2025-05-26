export default function Socials() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Socials</h1>
            <p className="text-lg text-gray-700">This is the Socials page.</p>
            <div className="mt-4">
                <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>
                <span className="mx-2">|</span>
                <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
            </div>
        </div>
    )
}