import { Button } from "@/shadui/ui/button";
import {
  FcBusinessman,
  FcAddDatabase,
  FcClearFilters,
  FcServices,
  FcPortraitMode,
  FcOk,
  FcCollect,
  FcBinoculars,
} from "react-icons/fc";

export default function pricingcards() {
  return (
    <div className=" mt-20 flex gap-7">
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="max-w-[43px] rounded-lg bg-orange-400 py-1 text-center text-sm text-white">
          Free
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          Free
        </span>
        <h3 className="text-gray-400">No credit card required</h3>
        <div className="mt-5 h-[1.5px] w-auto rounded bg-orange-600"></div>
        <div className="mt-7 flex items-center space-x-2">
          <FcBusinessman size={40} />
          <p className="text-sm">
            ChatOps integrations - Slack & Microsoft Teams
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <FcAddDatabase size={40} />
          <p className="text-sm">
            Your own private space hosted on stackoutflow.com
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcClearFilters size={38} />
          <p className="text-sm">Structured and searchable knowledge base</p>
        </div>
        <Button className="mt-20 rounded-lg bg-[#E6700C] px-8 py-3 text-[15px] text-white">
          Join Community
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Always free up to 50 teammates
        </p>
      </div>
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="max-w-[43px] rounded-lg bg-gray-400 py-1 text-center text-sm text-black">
          Basic
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          $6.50 USD
        </span>
        <h3 className="text-gray-400">per teammate / month</h3>
        <div className="mt-4 h-[1.5px] w-auto rounded bg-gray-300"></div>
        <div className="mt-7 flex items-center space-x-2">
          <FcServices size={40} />
          <p className="text-sm">
            Single sign-on (SSO) with SAML + Okta integration
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcBusinessman size={40} />
          <p className="text-sm">
            ChatOps integrations - Slack & Microsoft Teams
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <FcAddDatabase size={40} />
          <p className="text-sm">
            Your own private space hosted on stackoutflow.com
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcClearFilters size={38} />
          <p className="text-sm">Structured and searchable knowledge base</p>
        </div>
        <Button className="mt-7 rounded-lg bg-gray-400 px-8 py-3 text-[15px] text-white">
          Get Started
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Up to 250 teammates
        </p>
      </div>
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="flex max-w-[80px] items-center justify-center rounded-lg bg-gray-800 py-1 text-center text-sm  text-white">
          Business
          <p> 🌟</p>
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          $13.50 USD
        </span>
        <h3 className="text-gray-400">per teammate / month</h3>
        <div className="mt-4 h-[1.5px] w-auto rounded bg-gray-800"></div>
        <div className="mt-5 flex items-center space-x-2">
          <p className="text-sm text-gray-400">+ Plus All the basic perks...</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcBinoculars size={30} />
          <p className="text-sm">Long-form knowledge with Articles</p>
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <FcCollect size={30} />
          <p className="text-sm">Group content together into Collections</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcOk size={30} />
          <p className="text-sm">Usage and adoption metrics</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcPortraitMode size={30} />
          <p className="text-sm">Priority customer support</p>
        </div>
        <Button className="mt-7 rounded-lg bg-gray-800 px-8 py-3 text-[15px] text-white">
          Get Started
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Unlimited Teammates
        </p>
      </div>
    </div>
  );
}
