import React, {component} from 'react';
import { Components } from 'antd/lib/date-picker/generatePicker';
import { Row } from 'antd';

class Login extends Components {
   constructor() {

   }
   
   // 返回需要展示在屏幕上的视图的层次结构
    render() {
       return (
        <Row>
            <Col span={24}>
               <input type="text" placeholder="请输入电话"/>
            </Col>
        </Row>
       )
    }
}

export default Login;