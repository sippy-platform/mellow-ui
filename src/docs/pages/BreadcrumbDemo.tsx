import DemoBox from '../components/DemoBox';
import Layout from '../Components/Layout';

import { Breadcrumb, BreadcrumbItem } from '../../components';
import ValkyrieIcon, { viHouse } from '@sippy-platform/valkyrie';

export default function BreadcrumbDemo() {
  return (
    <Layout>
      <h2>Breadcrumb</h2>
      <p>Show your users where they are.</p>
      <DemoBox>
        <Breadcrumb>
          <BreadcrumbItem><ValkyrieIcon icon={viHouse} /></BreadcrumbItem>
          <BreadcrumbItem>Users</BreadcrumbItem>
          <BreadcrumbItem>Settings</BreadcrumbItem>
          <BreadcrumbItem active>System</BreadcrumbItem>
        </Breadcrumb>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Breadcrumb component provides support for the color prop.</p>
      <DemoBox>
        <Breadcrumb color="red">
          <BreadcrumbItem><ValkyrieIcon icon={viHouse} /></BreadcrumbItem>
          <BreadcrumbItem>Users</BreadcrumbItem>
          <BreadcrumbItem>Settings</BreadcrumbItem>
          <BreadcrumbItem active>System</BreadcrumbItem>
        </Breadcrumb>
      </DemoBox>
    </Layout>
  );
}
