import { TableItems, TableWrapper, Wrapper } from "./styles"


const LoginLogsTab = () => {
    return <Wrapper>
            <h3>Log ins</h3>

            <TableWrapper>
                <ul className="head">
                    <li></li>
                    <li>Device</li>
                    <li>Date</li>
                    <li>Location</li>
                    <li>IP Address</li>
                </ul>
                {[1,2,3,4,5,6,7,8].map((item, idx) => {
                    return <TableItems key={idx}>
                        <li></li>
                        <li>Chrome V105.0.0 (Windows)</li>
                        <li>2022-09-29 06AM</li>
                        <li>Lagos Nigeria</li>
                        <li>102.89.46.143</li>
                    </TableItems>
                })}
            </TableWrapper>
        </Wrapper>
}

export default LoginLogsTab