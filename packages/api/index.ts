import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.warframestat.us',
});

export class WarframeInterface {
  private routes: Map<string, string>;

  constructor(platform: string) {
    this.routes = new Map<string, string>();
    this.routes.set('Alerts', `/${platform}/alerts`)
    this.routes.set('Events', `/${platform}/events`)
    this.routes.set('Earth cycle', `/${platform}/earthCycle`)
    this.routes.set('Cetus cycle', `/${platform}/cetusCycle`)
    this.routes.set('Orb vallis cycle', `/${platform}/vallisCycle`)
    this.routes.set('Cambion drift cycle', `/${platform}/cambionCycle`)
    this.routes.set('Arbitration', `/${platform}/arbitration`)
    this.routes.set('Archon hunt', `/${platform}/archonHunt`)
    this.routes.set('Void trader', `/${platform}/voidTrader`)
    this.routes.set('Steel path', `/${platform}/steelPath`)
  }

  get routesNames() {
    const names: string[] = [];

    this.routes.forEach((_, key) => names.push(key));

    return names;
  }

  getRoute(name: string) {
    return String(this.routes.get(name));
  }

  async fetch(route: string) {
    return await api.get(this.getRoute(route));
  }
}
