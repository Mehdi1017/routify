import { expect, test } from "vitest";
import { Route } from "../src/model/Route";
import { Transport } from "../src/model/Transport";
import { getRouteFromPlacesNames } from "../src/services/RouteManager";

test('getRoute_ApiOnline_routeIsObtained', async () => {
    const origin = 'Castellón',
        destiny = 'Valencia',
        transport = Transport.Car;

    const route: Route = await getRouteFromPlacesNames(origin, destiny, transport);
    expect(route.distance).resolves.toBeLessThan(1000);
    expect(route.distance).resolves.toBeGreaterThan(30);

})

test("getRoute_ApiOnlineAndPlaceNameNotValid_ThorwPlaceNotValidException", () => {
    const origin = 'Castellón',
        destiny = 'jldhkjha',
        transport = Transport.Car;

    expect(() => getRouteFromPlacesNames(origin, destiny, transport)).toThrowError('Place name not valid');
})
