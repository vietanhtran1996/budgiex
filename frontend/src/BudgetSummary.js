import React, {Component} from 'react';
import {Table, Icons, Button, Card, Columns} from '@myob/myob-widgets';
import PieChart from 'react-simple-pie-chart';
import './App.css';

class BudgetSummary extends Component {
    constructor(props) {
        super();
        this.state = {totalBudget: 2, totalSpent: 1}
    }

    render() {
        let categoriesJson = {
            "Everyday Expenses": [
                {Fuel: 0},
                {Groceries: 0}
            ],
            "Living Expenses": [
                {Mortgage: 0}
            ],
            "Regular Expenses": [],
            "Irregular Expenses": [],
            "Savings": [],
            "Personal": [],
        };

        let masterCategoryList = Object.keys(categoriesJson).map((masterCategory) => {
            return (
                <div id="collapsable-row">
                    <Table.Row>
                        <Table.RowItem><span className="dot"/>{masterCategory}</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem>$0</Table.RowItem>
                    </Table.Row>

                </div>)
        });

        let pie =
            <PieChart
                slices={[
                    {
                        color: '#000099',
                        value: 10,
                    },
                    {
                        color: '#9999ff',
                        value: 20,
                    },
                    {
                        color: '#0000ff',
                        value: 20,
                    },
                ]}
            />;

        return (

            <Card>
                <div className="text-right">
                    <Button type="secondary">Edit Budget</Button>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {pie}
                    </div>
                    <div className="col-md-8">
                        <span className="my-2">Total budget ${Math.round(this.state.totalBudget)} </span><br/>
                        <span className="my-2">Total spent    ${Math.round(this.state.totalSpent)}</span><br/>
                        <hr className="my-3"/>
                        <span
                            className="my-2">Remaining  ${Math.round(this.state.totalBudget - this.state.totalSpent)}</span><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Table.Body>
                            <Table.Header>
                                <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                                <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                                <Table.HeaderItem>SPENT</Table.HeaderItem>
                                <Table.HeaderItem>REMAINDER</Table.HeaderItem>
                            </Table.Header>
                            {masterCategoryList}</Table.Body>
                    </div>
                </div>
            </Card>

        );
    }
}

export default BudgetSummary;
