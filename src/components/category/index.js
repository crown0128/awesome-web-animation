import React from 'react';
import s from './category.css';
import Item from '../item';
import Book from '../book';
import GuiTool from '../guiTool';

function Category({ name, categoryData, listType, titleColor }) {
  return (
    <section className={`${s.category} ${s[listType]}`}>
      <h2 style={{ color: titleColor, }} className={s.title} id={name}>
        {name}
      </h2>
      <ul className={s.items}>
        {categoryData.map(item => {
          return (
            <li
              key={item.repo || item.googleBookId || item.name}
              className={s.itemWrapper}
            >
              {listType === 'defaultCards' && (
                <Item repo={item.repo} bundleData={item.bundleData} />
              )}
              {listType === 'bookCards' && <Book googleBookId={item.googleBookId} />}
              {listType === 'guiCards' && <GuiTool guiToolData={item} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
