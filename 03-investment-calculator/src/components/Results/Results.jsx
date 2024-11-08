import {formatter} from '../../util/investment.js';

export default function Results({ list }) {
    return (
        <section id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest (Year)</th>
                        <th>Total interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>$550</td>
                            <td>$10,300</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}