export default function Divider(props: any) {
    let grad = `linear-gradient(to right, #${props.stops[0]["color"]} ${props.stops[0]["percent"]}%,`;

    for (let i = 1; i < props.stops.length; i++) {
        var opac = props.stops[i]["opacity"] ?? "";

        if (i != props.stops.length - 1) {
            grad = ` ${grad}#${props.stops[i]["color"]}${opac} ${props.stops[i]["percent"]}%,`;
        } else {
            grad = ` ${grad}#${props.stops[i]["color"]}${opac} ${props.stops[i]["percent"]}%)`;
        }
    }

    return (
        <div style={{ background: grad }} className={`h-1 w-full`}></div>
    );
}
