import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return (
        <div>
            <h1>This is a Member Home Page</h1>
            <p>Anggap saja ini tampilan profil member dengan ID ke-{id} :v</p>

            <img src={`https://picsum.photos/id/${id}/300`} alt="" />
            <p>
                Back to <Link href={"/"}>Home</Link>
            </p>
            <p>
                Back to <Link href={"/member"}>Member Lists</Link>
            </p>
        </div>
    )
}
