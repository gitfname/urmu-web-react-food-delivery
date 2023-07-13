
import {
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react"

import {
    UserIcon,
    PhoneIcon,
    LockClosedIcon
} from "@heroicons/react/24/outline"

function CreateAccount() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8 grid place-items-center">

            <div className="w-full max-w-lg rounded-3xl p-4 md:p-8 bg-gray-50 shadow-md shadow-black/5">
                <p
                    className="typogrophy-2"
                >
                    ساخت اکانت جدید
                </p>

                <div className="flex flex-col gap-y-3 mt-7">
                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-[--primary-color-70]" />
                        </InputLeftElement>
                        <Input
                            placeholder="رمز ارسالی را وارد نمایید"
                            variant="filled"
                            fontFamily="vazir"
                            type="text"
                            maxLength={20}
                            rounded="lg"
                            fontSize="sm"
                            bgColor="var(--primary-color-10)"
                            _placeholder={{
                                textColor: "var(--primary-color-60)"
                            }}
                            _hover={{
                                bgColor: "var(--primary-color-5)"
                            }}
                            _focus={{
                                borderColor: "var(--primary-color-40)"
                            }}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <PhoneIcon strokeWidth={1.5} className="w-5 h-5 text-[--primary-color-70]" />
                        </InputLeftElement>
                        <Input
                            placeholder="شماره موبایل"
                            variant="filled"
                            fontFamily="vazir"
                            type="number"
                            maxLength={11}
                            rounded="lg"
                            fontSize="sm"
                            bgColor="var(--primary-color-10)"
                            _placeholder={{
                                textColor: "var(--primary-color-60)"
                            }}
                            _hover={{
                                bgColor: "var(--primary-color-5)"
                            }}
                            _focus={{
                                borderColor: "var(--primary-color-40)"
                            }}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-[--primary-color-70]" />
                        </InputLeftElement>
                        <Input
                            placeholder="رمز عبور"
                            variant="filled"
                            fontFamily="vazir"
                            type="password"
                            maxLength={20}
                            minLength={6}
                            rounded="lg"
                            fontSize="sm"
                            bgColor="var(--primary-color-10)"
                            _placeholder={{
                                textColor: "var(--primary-color-60)"
                            }}
                            _hover={{
                                bgColor: "var(--primary-color-5)"
                            }}
                            _focus={{
                                borderColor: "var(--primary-color-40)"
                            }}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-[--primary-color-70]" />
                        </InputLeftElement>
                        <Input
                            placeholder="تکرار رمز عبور"
                            variant="filled"
                            fontFamily="vazir"
                            type="password"
                            maxLength={20}
                            minLength={6}
                            rounded="lg"
                            fontSize="sm"
                            bgColor="var(--primary-color-10)"
                            _placeholder={{
                                textColor: "var(--primary-color-60)"
                            }}
                            _hover={{
                                bgColor: "var(--primary-color-5)"
                            }}
                            _focus={{
                                borderColor: "var(--primary-color-40)"
                            }}
                        />
                    </InputGroup>

                    <button className="primary-btn mt-5 w-full max-w-xs mx-auto py-2.5">
                        ساخت اکانت
                    </button>

                    <button className="text-sm text-[--primary-color-80] font-[vazir] mt-3
                    hover:text-[--primary-color-95] transition-colors duration-200">
                        از قبل اکانت دارید ؟
                    </button>

                </div>

            </div>


        </div>
    )
}

export default CreateAccount