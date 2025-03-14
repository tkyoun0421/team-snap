export abstract class View {
  protected container: HTMLDivElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId) as HTMLDivElement;
    if (!container) {
      throw new Error('Container not found');
    }

    this.container = container as HTMLDivElement;
  }

  abstract mount(container: HTMLDivElement): void;
  abstract render(): void;
  abstract attachEventHandler(fn: () => void): void;
  abstract getValue(): any;
}

export abstract class Container<T extends View> {
  protected view: T;

  constructor(view: T) {
    this.view = view;
    this.initialize();
  }

  protected initialize(): void {
    this.attachEvents();
    this.view.render();
  }

  protected abstract attachEvents(): void;
}
