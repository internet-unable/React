import {formatter} from '../../util/investment.js';

export default function Results({ list }) {
    const initialInvestment = list[0].valueEndOfYear - list[0].interest - list[0].annualInvestment;

    return (
        <table id="result">
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
                {list.map(item => {
                    const totalInterest = item.valueEndOfYear - (item.annualInvestment * item.year) - initialInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}