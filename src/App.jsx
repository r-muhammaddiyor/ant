import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import menuAnt from './components/Menu';
import 'antd/dist/reset.css';
import {
  Button,
  Flex,
  Tooltip,
  Typography,
  Divider,
  Space,
  Layout,
  Row,
  Col,
  Menu,
  Breadcrumb,
  Pagination,
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  DatePicker,
  Switch,
  Upload,
  Avatar,
  Badge,
  Card,
  List,
  Table,
  Descriptions,
  Tag,
  Alert,
  Modal,
  message,
  notification,
  Progress,
} from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  const tableColumns = [{ title: 'Name', dataIndex: 'name', key: 'name' }];
  const tableData = [{ key: 1, name: 'John Doe' }];

  const listData = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
          <Space direction="vertical">
            <Button type="primary">Primary Button</Button>
            <Divider>Divider</Divider>
            <Space>
              <Button>One</Button>
              <Button>Two</Button>
            </Space>
          </Space>
        <Header style={{ color: 'white' }}>AntD 30 Components Demo</Header>
        <Content style={{ marginTop: 20 }}>

          <Divider />

          <Title level={3}>Layout & Navigation</Title>
          <Layout style={{ background: '#f0f2f5', padding: 10 }}>
            <Row gutter={16}>
              <Col span={12}>Left Column</Col>
              <Col span={12}>Right Column</Col>
            </Row>
            <Menu
              items={[
                { label: 'Home', key: 'home' },
                { label: 'About', key: 'about' },
              ]}
            />
            <Breadcrumb items={[{ title: 'Home' }, { title: 'Blog' }]} />
            <Pagination defaultCurrent={1} total={50} />
          </Layout>

          <Divider />

          <Title level={3}>Data Entry</Title>

          <Divider />

          <Title level={3}>Data Display</Title>
          <Space>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Badge count={5}>
              <MailOutlined />
            </Badge>
          </Space>
          <Card title="Card Title" style={{ width: 300, marginTop: 10 }}>
            Card Content
          </Card>
          <List
            size="small"
            bordered
            dataSource={listData}
            renderItem={(item) => <List.Item>{item}</List.Item>}
            style={{ width: 300, marginTop: 10 }}
          />
          <Table columns={tableColumns} dataSource={tableData} style={{ marginTop: 10 }} />
          <Descriptions title="User Info" column={1}>
            <Descriptions.Item label="Name">John Doe</Descriptions.Item>
          </Descriptions>
          <Tag color="blue">Blue Tag</Tag>

          <Divider />

          <Title level={3}>Feedback</Title>
          <Alert message="Success Alert" type="success" showIcon style={{ marginBottom: 10 }} />
          <Button type="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            title="Modal Title"
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
          >
            Modal Content
          </Modal>
          <Button onClick={() => message.success('Success message!')}>Show Message</Button>
          <Button
            onClick={() =>
              notification.open({ message: 'Notification', description: 'Notification content' })
            }
          >
            Show Notification
          </Button>

          <Flex gap="small" vertical>
            <Flex wrap gap="small">
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="primary" shape="circle">
                A
              </Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
            </Flex>
            <Flex wrap gap="small">
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="dashed" icon={<SearchOutlined />}>
                Search
              </Button>
              <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
            </Flex>
          </Flex>

          <Progress percent={60} style={{ marginTop: 10 }} />
        </Content>
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Select">
              <Select options={[{ value: '1', label: 'One' }]} />
            </Form.Item>
            <Form.Item>
              <Checkbox>Accept terms</Checkbox>
              <Radio.Group options={[{ value: 'a', label: 'Option A' }]} />
            </Form.Item>
            <Form.Item>
              <DatePicker />
            </Form.Item>
            <Form.Item>
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item>
              <Upload>
                <Button>Upload File</Button>
              </Upload>
            </Form.Item>
          </Form>
        <menuAnt />
    </>
  );
}

export default App;
