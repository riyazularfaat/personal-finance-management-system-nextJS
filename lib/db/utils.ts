import bcrypt from "bcryptjs"
import { randomBytes } from "crypto"

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate session token
export function generateToken(): string {
  return randomBytes(32).toString("hex")
}

// Calculate session expiry (7 days from now)
export function getSessionExpiry(): Date {
  const expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + 7)
  return expiryDate
}
