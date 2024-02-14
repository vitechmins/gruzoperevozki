"use client"
import { Descriptions } from 'antd';
import BtnOrder from '../btn/btnOrder/BtnOrder';

const DescriptionsComp = ({ data, title = 'Заказать Грузоперевозки', main, kvartira }) => {
  return (
    <div className=''>
      <Descriptions
        title="Физ. лица"
        bordered
        column={3}
        layout='vertical'
      >
        {
          data.mass &&
          <Descriptions.Item className='' label={<span className='font-bold'>Вес и объём</span>}>
            {`до ${data.mass} тонн и ${data.mass2}м`}<sup><small>3</small></sup>
          </Descriptions.Item>
        }
        {
          data.price &&
          <Descriptions.Item label={<span className='font-bold'>1 час (руб.)</span>}>{`${data.price}`}</Descriptions.Item>
        }
        {
          data.km &&
          <Descriptions.Item label={<span className='font-bold'>руб/км</span>}>{`${data.km}`}</Descriptions.Item>
        }
        <Descriptions.Item label={<span className='font-bold'>Время</span>}>{`${data.time}`}</Descriptions.Item>
        <Descriptions.Item label={<span className='font-bold'>Грузчики (руб./час)</span>}>{`${data.gruz}`}</Descriptions.Item>

      </Descriptions>

      {
        !main && <div className="mt-6 flex justify-end">
          <BtnOrder title={title} ur={false} />
        </div>
      }

      {
        !kvartira &&
        <Descriptions
          title="Юр. лица"
          bordered
          column={2}
          layout='vertical'
          className='mt-6'
        >
          {
            data.mass &&
            <Descriptions.Item label={<span className='font-bold'>Вес и объём</span>}>
              {`до ${data.mass} тонн и ${data.mass2}м`}<sup><small>3</small></sup>
            </Descriptions.Item>
          }
          {
            data.ur &&
            <Descriptions.Item label={<span className='font-bold'>1 час (руб.)</span>}>{`${data.ur}`}</Descriptions.Item>
          }
         
          {
            data.km_ur &&
            <Descriptions.Item label={<span className='font-bold'>руб/км</span>}>{`${data.km_ur}`}</Descriptions.Item>
          }
          <Descriptions.Item label={<span className='font-bold'>Время</span>}>{`${data.time_ur}`}</Descriptions.Item>
          <Descriptions.Item label={<span className='font-bold'>Грузчики (руб./час)</span>}>{`${data.gruz_ur}`}</Descriptions.Item>

        </Descriptions>
      }



      {
        !main && !kvartira ?
          <div className="mt-6 flex justify-end">
            <BtnOrder title={title} ur />
          </div>
          :
          null
      }

    </div>
  );
};

export default DescriptionsComp;
