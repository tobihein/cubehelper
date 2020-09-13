export class Algorithmmodel {
  private id: string;
  private name: string;
  private moves: string[];

  public setId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return name;
  }

  public setMoves(moves: string[]): void {
    this.moves = moves;
  }

  public getMoves(): string[] {
    return this.moves;
  }
}
