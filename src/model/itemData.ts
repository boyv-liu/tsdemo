import Category from './category'

class ItemData {
  id!: number
  categoryId!: Category
  title!: string
  content!: string
  createdTime!: string

  constructor(
    id: number = -1,
    categoryId: Category = -1,
    title: string = '',
    content: string = ''
  ) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.content = content
    this.createdTime = this.dateFormat(Date.now())
  }

  dateFormat(timeStr: number): string {
    const date = new Date(timeStr)
    const str =
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDay() +
      '-' +
      date.getHours() +
      ':' +
      date.getMinutes()
    return str
  }
}

export default ItemData
