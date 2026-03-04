import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const OutputNumbers: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Numbers in Output Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Python Output Numbers
                </h2>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Number Types in Python
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Python supports several number types that you can output and format in different ways:
                    </p>
                    <div className="space-y-2">
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                Integers (int)
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Whole numbers without decimal points: 42, -10, 0
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                Floats (float)
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Numbers with decimal points: 3.14, -2.5, 0.0
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                Complex (complex)
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Complex numbers with real and imaginary parts: 3+4j, 5j
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Number Formatting Techniques
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        There are several ways to format and display numbers:
                    </p>
                    <ul className={`space-y-2 ml-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">1.</span>
                            <span><span className="font-semibold">Decimal Places</span> - Control how many digits after decimal</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">2.</span>
                            <span><span className="font-semibold">Number Bases</span> - Display in binary, octal, hexadecimal</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">3.</span>
                            <span><span className="font-semibold">Scientific Notation</span> - Display large numbers compactly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">4.</span>
                            <span><span className="font-semibold">Padding and Alignment</span> - Format with spaces and alignment</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">5.</span>
                            <span><span className="font-semibold">Thousand Separators</span> - Add commas for readability</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Number Output Examples
                </h2>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 1: Decimal Places
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`pi = 3.14159265

# Using f-string with :.2f (2 decimal places)
print(f"Pi: {pi:.2f}")

# Using f-string with :.4f (4 decimal places)
print(f"Pi: {pi:.4f}")

# Using round() function
print(f"Pi: {round(pi, 3)}")

# Output:
# Pi: 3.14
# Pi: 3.1416
# Pi: 3.142`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 2: Different Number Bases
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`num = 42

# Decimal (default)
print(f"Decimal: {num}")

# Binary (base 2)
print(f"Binary: {bin(num)}")

# Octal (base 8)
print(f"Octal: {oct(num)}")

# Hexadecimal (base 16)
print(f"Hexadecimal: {hex(num)}")

# Output:
# Decimal: 42
# Binary: 0b101010
# Octal: 0o52
# Hexadecimal: 0x2a`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 3: Scientific Notation
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`large_num = 1234567.89

# Scientific notation with e
print(f"Scientific: {large_num:e}")

# With 2 decimal places
print(f"Scientific: {large_num:.2e}")

# Output:
# Scientific: 1.234568e+06
# Scientific: 1.23e+06`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 4: Padding and Alignment
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`num = 42

# Right-aligned in 10 character width
print(f"{num:>10}")

# Left-aligned in 10 character width
print(f"{num:<10}")

# Center-aligned in 10 character width
print(f"{num:^10}")

# Pad with zeros
print(f"{num:05}")

# Output (spaces shown as dots):
# .........42
# 42........
# ...42.....
# 00042`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 5: Thousand Separators
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`large_num = 1234567.89

# With comma separator
print(f"With commas: {large_num:,.2f}")

# Using .format()
print("Value: {:,.2f}".format(large_num))

# Output:
# With commas: 1,234,567.89
# Value: 1,234,567.89`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 6: Percentage Formatting
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`percentage = 0.856

# Display as percentage
print(f"Score: {percentage:.1%}")

# Without decimal places
print(f"Score: {percentage:.0%}")

# Output:
# Score: 85.6%
# Score: 86%`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 7: Complex Numbers
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`c1 = 3 + 4j
c2 = 5 + 2j

print(f"Complex 1: {c1}")
print(f"Complex 2: {c2}")

# Real and imaginary parts
print(f"Real part: {c1.real}")
print(f"Imaginary part: {c1.imag}")

# Output:
# Complex 1: (3+4j)
# Complex 2: (5+2j)
# Real part: 3.0
# Imaginary part: 4.0`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutputNumbers;
