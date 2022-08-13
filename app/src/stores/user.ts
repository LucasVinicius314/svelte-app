import type { User } from '../typescript/user'
import { writable } from 'svelte/store'

export const userStore = writable<User | null>(null)
