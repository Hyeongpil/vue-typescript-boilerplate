export default class Characters {
  private name: string = ""
  private aliases: string[] = []
  private title: string = ""
  private books: string[] = []
  private tvSeries: string[] = []

  public get $name(): string {
    return this.name
  }

  public get $aliases(): string[] {
    return this.aliases
  }

  public get $title(): string {
    return this.title
  }

  public get $books(): string[] {
    return this.books
  }

  public get $tvSeries(): string[] {
    return this.tvSeries
  }
}
