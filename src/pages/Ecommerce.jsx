import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div
        className="
          flex
          flex-wrap
          lg:flex-nowrap
          justify-center"
      >
        <div
          className="
            m-3
            p-8
            pt-9
            h-44
            w-full
            lg:w-80
            bg-cover
            bg-center
            rounded-xl
            bg-white
            bg-no-repeat
            bg-hero-pattern
            dark:text-gray-200
            dark:bg-secondary-dark-bg"
        >
          <div
            className="
              flex
              items-center
              justify-between"
          >
            <div>
              <p
                className="
                  font-bold
                  text-gray-400"
              >
                Earnings
              </p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div
          className="
            m-3
            flex
            gap-1
            flex-wrap
            items-center
            justify-center"
        >
          {earningData.map((item) => (
            <div
              key={item.title}
              className="
                p-4
                pt-9
                md:w-56
                bg-white 
                rounded-2xl
                dark:text-gray-200
                dark:bg-secondary-dark-bg"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="
                  p-4
                  text-2xl
                  opacity-0.9
                  rounded-full
                  hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span
                  className={`
                    ml-2
                    text-sm
                    text-${item.pcColor}
                  `}
                >
                  {item.percentage}
                </span>
              </p>
              <p
                className="
                  mt-1
                  text-sm
                  text-gray-400"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="
          flex
          gap-10
          flex-wrap
          justify-center"
      >
        <div
          className="
            m-3
            md:w-780
            bg-white
            rounded-2xl
            dark:text-gray-200
            dark:bg-secondary-dark-bg"
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div
            className="
              gap-10 
              flex-wrap 
              mt-10 flex 
              justify-center"
          >
            <div
              className="
                m-4
                pr-10
                border-r-1 
                border-color"
            >
              <div>
                <p>
                  <span
                    className="
                      text-3xl
                      font-semibold"
                  >
                    $93,438
                  </span>
                  <span
                    className="
                      ml-3
                      p-1.5
                      text-xs
                      rounded-full
                      text-white
                      cursor-pointer
                      bg-green-400
                      hover:drop-shadow-xl"
                  >
                    23%
                  </span>
                </p>
                <p className="text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span
                    className="
                      text-3xl
                      font-semibold"
                  >
                    $48,438
                  </span>
                </p>
                <p className="text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className='mt-10'>
                <Button 
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
