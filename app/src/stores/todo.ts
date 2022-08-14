import type { Todo } from '../typescript/todo'
import { writable } from 'svelte/store'

export const todoStore = writable<Promise<Todo[]> | null>(null)
