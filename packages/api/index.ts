import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.warframestat.us',
});

export class WarframeRoutes {
  private routes: Map<string, string>;

  constructor(platform: string) {
    this.routes = new Map<string, string>();
    this.routes.set('alerts', `/${platform}/alerts`)
    this.routes.set('events', `/${platform}/events`)
    this.routes.set('cetus cycle', `/${platform}/cetusCycle`)
    this.routes.set('orb vallis cycle', `/${platform}/vallisCycle`)
    this.routes.set('cambion drift cycle', `/${platform}/cambionCycle`)
    this.routes.set('arbitration', `/${platform}/arbitration`)
    this.routes.set('archon hunt', `/${platform}/archonHunt`)
    this.routes.set('void trader', `/${platform}/voidTrader`)
    this.routes.set('steel path', `/${platform}/steelPath`)
  }

  get routesNames() {
    const names: string[] = [];

    this.routes.forEach((_, key) => names.push(key));

    return names;
  }

  getRoute(name: string) {
    return String(this.routes.get(name));
  }
}

// export enum WarframeRoutes {
//   'alerts' = '/pc/alerts',
//   'events' = '/pc/events',
//   'cetus cycle' = '/pc/cetusCycle',
//   'orb vallis cycle' = '/pc/vallisCycle',
//   'cambion drift cycle' = '/pc/cambionCycle',
//   'arbitration' = '/pc/arbitration',
//   'archon hunt' = '/pc/archonHunt',
//   'void trader' = '/pc/voidTrader',
//   'steel path' = '/pc/steelPath',
// }
