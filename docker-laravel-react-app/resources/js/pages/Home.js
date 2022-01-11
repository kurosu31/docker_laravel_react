
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
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


// ヘッダーのコンテンツ用の配列定義
const headerList = ['名前','タスク内容','編集','完了'];

// tasks(rows)を定義する
let rows = [
    {
        name: "モーリー",
        content: "肩トレ",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },    {
        name: "ドンキーコング",
        content: "バナナ補給",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    }
]

function Home() {
    // 定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                    <Card className="{classes.card}">
                        {/* テーブル部分の定義 */}
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
                    </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
