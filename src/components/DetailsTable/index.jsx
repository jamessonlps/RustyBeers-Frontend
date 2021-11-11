import { Table } from "./styles";

export function DetailsTable(props) {
    return (
        <Table>
            <tr>
                <th>Alcohol by Volume</th>
                <td>{props.data.abv || "---"}</td>
            </tr>
            <tr>
                <th>International Bitterness Units</th>
                <td>{props.data.ibu || "---"}</td>
            </tr>
            <tr>
                <th>Final Gravity</th>
                <td>{props.data.target_fg || "---"}</td>
            </tr>
            <tr>
                <th>Original Gravity</th>
                <td>{props.data.target_og || "---"}</td>
            </tr>
            <tr>
                <th>Color Units Ebc </th>
                <td>{props.data.ebc || "---"}</td>
            </tr>
            <tr>
                <th>SRM (Standard Reference Method)</th>
                <td>{props.data.srm || "---"}</td>
            </tr>
            <tr>
                <th>ph</th>
                <td>{props.data.ph || "No data"}</td>
            </tr>
            <tr>
                <th>Attenuation Level</th>
                <td>{props.data.attenuation_level || "No data"}</td>
            </tr>
            <tr>
                <th>Volume</th>
                <td>{props.data.volume.value} {props.data.volume.unit}</td>
            </tr>
            <tr>
                <th>Boil volume</th>
                <td>{props.data.boil_volume.value} {props.data.boil_volume.unit}</td>
            </tr>
        </Table>
    );
}