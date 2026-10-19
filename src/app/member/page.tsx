import Link from "next/link";

const MemberPage = () => {
    const imageId = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>This is a Member Home Page</h1>
            <p>This page contains information about something</p>

            {imageId.map(id => (
                <div key={id}>
                    <Link href={`/member/${id}`}>Anggap saja ini profil member dengan ID {id}</Link><br />
                </div>
            ))}
            <p>
                Back to <Link href={"/member"}>Member Page</Link>
            </p>
        </div>
    )
}

export default MemberPage;