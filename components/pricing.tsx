"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Hobby Plan",
      desc: "Enjoy limited access to all our features",
      price: 0,
      isMostPop: false,
      features: ["Make the best schedule", "Support your team"],
    },
    {
      name: "Basic Plan",
      desc: "Make the best schedule for your team",
      price: 10,
      isMostPop: true,
      features: [
        "Make the best schedule",
        "Support your team",
        "Build your website",
        "Video calls",
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Make the best schedule for your team and more",
      price: 20,
      isMostPop: false,
      features: [
        "Make the best schedule",
        "Support your team",
        "Build your website",
        "Video calls",
        "Audio calls",
      ],
    },
  ];

  return (
    <section className="max-w-screen-xl w-full mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
        className="max-w-screen-xl mx-auto px-4 md:px-8"
      >
        <div className="relative max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-light tracking-tighter sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text text-pretty">
            Pricing Plans for your business
          </h3>
          <p className="mt-3 max-w-xl text-muted-foreground text-balance">
            Select the plan that best suits your needs.
          </p>
        </div>
        <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
          {plans.map((item, idx) => (
            <Card
              key={idx}
              shadow="none"
              className={`relative rounded-[20px] p-[2px] ${
                item.isMostPop ? "sm:scale-110" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]" />
              ) : (
                <span className="absolute inset-[-1000%] bg-[#dbdbdb] dark:bg-[#1c1c1c]" />
              )}
              <div className="z-[2] flex flex-col justify-between w-full h-full bg-background rounded-[18px] p-5">
                <CardBody className="w-full flex items-start gap-3">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-light">{item.name}</h4>
                    <span className="text-muted-foreground text-sm font-light">
                      {item.desc}
                    </span>
                  </div>
                  <span className="text-2xl font-light">${item.price}</span>

                  <Divider />

                  <div className="flex flex-col gap-5 pb-5">
                    <span className="text-muted-foreground text-sm font-light">
                      Includes
                    </span>
                    <ul className="flex flex-col gap-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="text-sm font-light">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
                <CardFooter className="p-0">
                  <Button
                    className="w-full"
                    variant="solid"
                    color={item.isMostPop ? "primary" : "default"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
