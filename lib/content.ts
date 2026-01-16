import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/pages")

export interface PageContent {
  slug: string
  title: string
  description: string
  content: string
  data: Record<string, unknown>
}

export function getPageContent(slug: string): PageContent | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      content,
      data,
    }
  } catch {
    return null
  }
}

export function getAllPageSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory)
    return files.filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, ""))
  } catch {
    return []
  }
}
