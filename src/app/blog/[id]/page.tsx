import Link from "next/link";
import { notFound } from "next/navigation";

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


type PageProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPage({ params }: PageProps) {

    const { id } = await params;
    const blogId = parseInt(id);
    const blog = blogs.find(blog => blog.id === blogId);

    if (!blog) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-5xl">
            <div className="flex flex-col gap-8 mt-10 justify-center items-center  bg-gray-200 rounded-2xl p-12">
                <div>
                    <h1 className="text-5xl text-amber-600">{blog.title}</h1>
                </div>
                <div className="text-xl/relaxed">
                    <p className="text-right text-gray-500 mb-2">{blog.posted_on}</p>
                    {blog.post}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4" >
                {blogs
                    .filter((sampleBlog) => sampleBlog.id != blog.id)
                    .slice(0,2)
                    .map((relatedBlogs) => {
                        return(
                            <Link href={`/blog/${relatedBlogs.id}`} key={relatedBlogs.id}
                                className="border-1 border-amber-400 rounded-2xl p-4 flex flex-col gap-2 shadow-lg hover:shadow-2xl transition-shadow duration-200"
                            >
                                <h3 className="text-2xl text-amber-600">{relatedBlogs.title}</h3>
                                <p className="text-md">{relatedBlogs.post.length > 150 ? `${relatedBlogs.post.slice(0,150)}...` : relatedBlogs.post}</p>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}
