import Link from "next/link"

export default function Blog() {

    const blogs =
        [
            {
                id: 1,
                title: 'AI fundamentals',
                posted_on: '2025-09-10',
                post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui aspernatur deleniti non, veniam dolore! Explicabo deserunt, beatae rerum fugit aliquam qui optio inventore modi. Ratione id dolore veniam reiciendis sequi eius beatae nobis autem. At tempora eum quia dolor temporibus quis, dolorem accusamus magnam a quae modi nostrum in cumque, suscipit voluptatum libero id sapiente rerum culpa. Autem voluptates illum ducimus laborum dolor exercitationem quasi, suscipit, doloremque tempore modi dolore, non quisquam soluta? Reprehenderit fugiat, distinctio perferendis odit saepe facere quidem, asperiores, suscipit repellendus architecto unde ad consectetur quaerat? Consectetur doloremque ex vel alias quo quis assumenda molestiae ducimus.'
            },
            {
                id: 2,
                title: 'AI foundations',
                posted_on: '2025-09-10',
                post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui aspernatur deleniti non, veniam dolore! Explicabo deserunt, beatae rerum fugit aliquam qui optio inventore modi. Ratione id dolore veniam reiciendis sequi eius beatae nobis autem. At tempora eum quia dolor temporibus quis, dolorem accusamus magnam a quae modi nostrum in cumque, suscipit voluptatum libero id sapiente rerum culpa. Autem voluptates illum ducimus laborum dolor exercitationem quasi, suscipit, doloremque tempore modi dolore, non quisquam soluta? Reprehenderit fugiat, distinctio perferendis odit saepe facere quidem, asperiores, suscipit repellendus architecto unde ad consectetur quaerat? Consectetur doloremque ex vel alias quo quis assumenda molestiae ducimus.'
            },
            {
                id: 3,
                title: 'Next App',
                posted_on: '2025-09-10',
                post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui aspernatur deleniti non, veniam dolore! Explicabo deserunt, beatae rerum fugit aliquam qui optio inventore modi. Ratione id dolore veniam reiciendis sequi eius beatae nobis autem. At tempora eum quia dolor temporibus quis, dolorem accusamus magnam a quae modi nostrum in cumque, suscipit voluptatum libero id sapiente rerum culpa. Autem voluptates illum ducimus laborum dolor exercitationem quasi, suscipit, doloremque tempore modi dolore, non quisquam soluta? Reprehenderit fugiat, distinctio perferendis odit saepe facere quidem, asperiores, suscipit repellendus architecto unde ad consectetur quaerat? Consectetur doloremque ex vel alias quo quis assumenda molestiae ducimus.'
            }
        ]

    return (
        <div className="flex flex-col justify-center items-center gap-8 m-10">
            <div>
                <h1 className="text-5xl">Blog <span className="text-amber-600">Posts</span></h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {blogs.map((blog) => {
                    return (
                        <Link href={`/blog/${blog.id}`} key={blog.id} 
                            className="border-3 rounded-xl p-4 border-amber-300 flex flex-col gap-4 shadow-2xl hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-3xl text-amber-600">{blog.title}</h3>
                                <p className="text-xl/relaxed text-gray-400">{blog.posted_on}</p>
                            </div>
                            <div className="text-clamp-3 text-md/relaxed">
                                {blog.post.length > 340 ? `${blog.post.slice(0,340)}...`: blog.post }
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
} 