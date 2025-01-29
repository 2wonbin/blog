// import fs from 'fs';
// import path from 'path';

export default async function Page({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const { default: Post } = await import(`../content/${slug}.mdx`)

    return <Post />
}

export const dynamicParams = false
