export const getDistance = (a, b) => {
    try {
        if (a && b) {
            const R = 6371e3; // metres
            const φ1 = a.lat * Math.PI / 180; // φ, λ in radians
            const φ2 = b.lat * Math.PI / 180;
            const Δφ = (b.lat - a.lat) * Math.PI / 180;
            const Δλ = (b.lon - a.lon) * Math.PI / 180;
            const x = Δλ * Math.cos((φ1 + φ2) / 2);
            const y = Δφ;
            const d = Math.sqrt(x * x + y * y) * R; // in metres
            return (d / 1000).toFixed(1)
        }
    } catch (e) { console.error(e) }
}