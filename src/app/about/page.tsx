import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This page contains information about something</p>
            <p>
                Back to <Link href={"/"}>Home</Link>
            </p>
        </div>
    )
}

export default AboutPage;