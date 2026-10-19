import Link from "next/link";

const Content2Page = () => {
    return (
        <div>
            <h1>This is a Content2 Blog Page</h1>
            <p>This page contains information about something</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione voluptas quos veniam possimus explicabo consequuntur minima error est nulla. Labore quis quam ad ipsum praesentium officia ipsa, dolorum consectetur?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam nihil eos quae recusandae id eveniet. Doloribus beatae porro rem dicta, magni ipsam fugit sit quia id quaerat doloremque omnis?
            </p>
            <p>
                Back to <Link href={"/blog"}>Home</Link>
            </p>
        </div>
    )
}

export default Content2Page;