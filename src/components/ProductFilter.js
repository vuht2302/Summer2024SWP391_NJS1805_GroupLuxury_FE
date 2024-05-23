// ProductFilters.js
import React, { useState } from "react";

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState({ min: 270000, max: 359500000 });
  const [selectedGoldPurity, setSelectedGoldPurity] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedJewelryType, setSelectedJewelryType] = useState([]);
  const [selectedMaterialColor, setSelectedMaterialColor] = useState([]);

  const [openDropdowns, setOpenDropdowns] = useState({
    price: false,
    goldPurity: false,
    material: false,
    gender: false,
    jewelryType: false,
    materialColor: false,
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(
        Object.entries(prev).map(([key, value]) => [
          key,
          key === dropdown ? !value : false,
        ])
      ),
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleCheckboxChange = (setter) => (e) => {
    const { value, checked } = e.target;
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const filterCategoriesStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const filterDropdownStyle = {
    position: "relative",
  };

  const filterHeaderStyle = {
    cursor: "pointer",
    padding: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const filterContentStyle = (isOpen) => ({
    display: isOpen ? "block" : "none",
    position: "absolute",
    top: "40px",
    left: "0",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    zIndex: 1000,
    padding: "10px",
  });

  const labelStyle = {
    display: "block",
    margin: "5px 0",
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>Bộ lọc:</p>
      <div style={filterCategoriesStyle}>
        {/* Giá Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("price")}
          >
            Giá ▼
          </div>
          <div style={filterContentStyle(openDropdowns.price)}>
            <input
              type="text"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
            />
            đ &nbsp;–&nbsp;
            <input
              type="text"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
            đ
          </div>
        </div>

        {/* Tuổi vàng Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("goldPurity")}
          >
            Tuổi vàng ▼
          </div>
          <div style={filterContentStyle(openDropdowns.goldPurity)}>
            {["Vàng 10K", "Vàng 14K", "Vàng 18K", "Vàng 24K", "Vàng 16K"].map(
              (purity, index) => (
                <label key={index} style={labelStyle}>
                  <input
                    type="checkbox"
                    value={purity}
                    onChange={handleCheckboxChange(setSelectedGoldPurity)}
                  />
                  {purity}
                </label>
              )
            )}
          </div>
        </div>

        {/* Chất liệu Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("material")}
          >
            Chất liệu ▼
          </div>
          <div style={filterContentStyle(openDropdowns.material)}>
            {["Vàng", "Bạc", "Hợp kim cao cấp", "Platinum"].map(
              (material, index) => (
                <label key={index} style={labelStyle}>
                  <input
                    type="checkbox"
                    value={material}
                    onChange={handleCheckboxChange(setSelectedMaterial)}
                  />
                  {material}
                </label>
              )
            )}
          </div>
        </div>

        {/* Giới tính Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("gender")}
          >
            Giới tính ▼
          </div>
          <div style={filterContentStyle(openDropdowns.gender)}>
            {["Nữ", "Nam", "Unisex", "Trẻ em"].map((gender, index) => (
              <label key={index} style={labelStyle}>
                <input
                  type="checkbox"
                  value={gender}
                  onChange={handleCheckboxChange(setSelectedGender)}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Loại trang sức Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("jewelryType")}
          >
            Loại trang sức ▼
          </div>
          <div style={filterContentStyle(openDropdowns.jewelryType)}>
            {[
              "Bông tai",
              "Nhẫn",
              "Mặt dây chuyền",
              "Lắc",
              "Vòng",
              "Dây cổ",
              "Dây chuyền",
              "Cài áo",
              "Kiềng",
              "Đồng hồ",
              "Khác",
              "Charm",
              "Mề đay",
            ].map((jewelryType, index) => (
              <label key={index} style={labelStyle}>
                <input
                  type="checkbox"
                  value={jewelryType}
                  onChange={handleCheckboxChange(setSelectedJewelryType)}
                />
                {jewelryType}
              </label>
            ))}
          </div>
        </div>

        {/* Màu chất liệu Filter */}
        <div style={filterDropdownStyle}>
          <div
            style={filterHeaderStyle}
            onClick={() => toggleDropdown("materialColor")}
          >
            Màu chất liệu ▼
          </div>
          <div style={filterContentStyle(openDropdowns.materialColor)}>
            {[
              "Giả cổ",
              "Trắng + Đen",
              "Vàng + Trắng",
              "Hồng + Trắng",
              "Không quan tâm",
              "Colorit",
              "Đen",
              "Vàng + Đen",
              "Hồng + Đen",
            ].map((color, index) => (
              <label key={index} style={labelStyle}>
                <input
                  type="checkbox"
                  value={color}
                  onChange={handleCheckboxChange(setSelectedMaterialColor)}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
