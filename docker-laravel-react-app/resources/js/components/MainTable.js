import React from 'react';
import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';

// スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card : {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: purple["A100"],
    }
}));

function MainTable(props){
        //定義したスタイルを利用するための設定
        const classes = useStyles();

        //親コンポーネントからpropsで受け取る
        const {headerList, rows} =props;

    return (
        <TableContainer element ={Paper}>
        <Table className={classes.table} aria-label="simple table">
            {/* ヘッダー部分 */}
            <TableHead className={classes.tableHead}>
                <TableRow>
                    {headerList.map((item, index) => (
                        <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index)=> (
                    <TableRow key={index}>
                        {Object.keys(row).map(function(key,i){
                            return (
                                <TableCell align="center" key={i}>{row[key]}</TableCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    </TableContainer>
    )
}

export default MainTable;
