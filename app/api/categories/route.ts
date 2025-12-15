import { type NextRequest, NextResponse } from "next/server"
import { getCategoriesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const categoriesCollection = await getCategoriesCollection()
    const categories = await categoriesCollection.find({ userId: user._id }).toArray()

    const categoriesData = categories.map((category) => ({
      id: category._id!.toString(),
      name: category.name,
      type: category.type,
      icon: category.icon,
      color: category.color,
    }))

    return NextResponse.json({ categories: categoriesData }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get categories error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, type, icon, color } = await request.json()

    if (!name || !type) {
      return NextResponse.json({ error: "Name and type are required" }, { status: 400 })
    }

    const categoriesCollection = await getCategoriesCollection()
    const result = await categoriesCollection.insertOne({
      name,
      type,
      icon: icon || "📁",
      color: color || "#3b82f6",
      userId: user._id!,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "Category created successfully", categoryId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create category error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
