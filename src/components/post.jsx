const Post = () => {
  return (
    <div className="mx-[22rem]">
      <h1 className="font-semibold text-2xl  py-4">All Blog Post</h1>
      <div className="flex justify-between ">
        <div className="flex gap-5">
          <p className="text-red-400">All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <p>View All</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
        <div className="  border pl-9">
          <img
            className="w-[380px]  rounded mt-3"
            src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__"
          />
          <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
            technology
          </p>
          <h2 className="text-xl font-medium w-96">
            The Impact of Technology on <br /> the Workplace: How <br />
            Technology is Changing
          </h2>
          <div className="flex gap-4 items-center pb-3">
            <img
              className="w-9 rounded-full mt-5"
              src="https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_"
            />
            <p className="text-gray-300">Ernie Smith</p>
            <p className="text-gray-300">August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
