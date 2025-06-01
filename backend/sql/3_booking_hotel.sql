insert into public.bookingitem_comp (id, bookingtype, objectname, modulesequence)
values  ('fdec2748-9f84-4d41-95de-8e069e03a963', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('686de20d-361d-48aa-9294-47c02ea4ef00', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('3da8df91-6e9c-485f-89db-c325a87f1373', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('8ac8c0b9-bcd9-45c9-bd53-8c860b2cd646', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('ec63192d-5fb8-4f14-b015-65c16b8dfd38', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('bab39892-7a8b-4636-bce5-0a58ef5b399c', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('9656d87c-9a52-4ec0-a48e-74a997e63435', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('f8596627-31c3-41df-a2be-2d5b6a148016', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('5f0c9ea6-3036-45de-8eda-bfca7a204b49', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('de04ca32-491a-4d75-aadc-03a7df2f44cb', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('b893f282-4d72-4656-ae3c-ce84cea2afee', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('eb04fc3f-4967-4fda-ae97-c03a127a4608', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('10733d22-719b-47fc-9c89-e584d40ca2f5', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('79396b24-43d1-4da8-9abb-f9880579a193', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null),
        ('8b2ce59e-5d9d-4ae9-85c6-78f1dece1dfc', 'HOTEL', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'bookingitem_impl, bookingitem_hotel'),
        ('f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'HOTEL', 'OnlineTicketing.bookingitem.hotel.BookingItemImpl', null);


insert into public.bookingitem_impl (id)
values  ('686de20d-361d-48aa-9294-47c02ea4ef00'),
        ('8ac8c0b9-bcd9-45c9-bd53-8c860b2cd646'),
        ('ec63192d-5fb8-4f14-b015-65c16b8dfd38'),
        ('9656d87c-9a52-4ec0-a48e-74a997e63435'),
        ('5f0c9ea6-3036-45de-8eda-bfca7a204b49'),
        ('b893f282-4d72-4656-ae3c-ce84cea2afee'),
        ('10733d22-719b-47fc-9c89-e584d40ca2f5'),
        ('8b2ce59e-5d9d-4ae9-85c6-78f1dece1dfc');


insert into public.bookingitem_hotel (facilities, imageurl, location, title, id, record_id, recordname, base_component_id)
values  ('<p><span style="color: rgb(48, 49, 53);">Kolam Renang, WiFi, Parkir, Pusat Kebugaran, etc</span></p>', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/tix-hotel/images-web/2023/04/17/120e7929-c694-4b53-8547-1c517c224980-1681718229146-abf4ea09c6f66421838daa5a3bada1df.jpg', 'Jl. H. R. Rasuna Said No.20, RT.1/RW.5, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940', 'HABITARE Rasuna Jakarta', 'fdec2748-9f84-4d41-95de-8e069e03a963', '686de20d-361d-48aa-9294-47c02ea4ef00', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '686de20d-361d-48aa-9294-47c02ea4ef00'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/tix-hotel/images-web/2021/07/12/643183a4-ecff-4628-9802-68b6aea52e6f-1626077726904-325a1a5a9307de3749a7c65868b9dc4d.jpg', 'Jl. Raya Lenteng Agung No.18, RT.10/RW.2, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630, Indonesia', 'Kartika One Hotel Jakarta', '3da8df91-6e9c-485f-89db-c325a87f1373', '8ac8c0b9-bcd9-45c9-bd53-8c860b2cd646', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '8ac8c0b9-bcd9-45c9-bd53-8c860b2cd646'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10006970-da3bd77737b8fca05a6d3ddb6ec8312c.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640', 'Jalan Wanasegara No.2-5 Kuta, Bali, Kuta, Badung, Bali, Indonesia, 80361', 'Aston Kuta Hotel & Residence', '79396b24-43d1-4da8-9abb-f9880579a193', '8b2ce59e-5d9d-4ae9-85c6-78f1dece1dfc', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '8b2ce59e-5d9d-4ae9-85c6-78f1dece1dfc'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/tix-hotel/images-web/2023/02/07/484c443c-bcc1-4df9-be41-0731e93b1fa7-1675753459613-3ada0409c797e1bc31f21e4937072be5.jpg', 'District 8, SCBD, Lot 28', 'The Langham, Jakarta', 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'ec63192d-5fb8-4f14-b015-65c16b8dfd38', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'ec63192d-5fb8-4f14-b015-65c16b8dfd38'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007371-59a29a79f8c7b9cf9e1c7c005f648e61.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640', 'Jalan Margonda Raya No. 230A, Margonda, Depok, Jawa Barat, Indonesia, 16423', 'Savero Hotel Depok', 'bab39892-7a8b-4636-bce5-0a58ef5b399c', '9656d87c-9a52-4ec0-a48e-74a997e63435', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '9656d87c-9a52-4ec0-a48e-74a997e63435'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005565-1000x667-FIT_AND_TRIM-dcd1293104d9a6a2c17669565096604c.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640', 'Jalan Margonda Raya No.358 , Margonda, Depok, Jawa Barat, Indonesia, 16423', 'The Margo Hotel', 'f8596627-31c3-41df-a2be-2d5b6a148016', '5f0c9ea6-3036-45de-8eda-bfca7a204b49', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '5f0c9ea6-3036-45de-8eda-bfca7a204b49'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://ik.imagekit.io/tvlk/apr-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/6/0/97/536/359/BDOPA_4963725386_P.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640', 'Jl. Dr Djunjunan 96,Pasteur, Pasteur, Bandung, Jawa Barat, Indonesia, 40162', 'Holiday Inn BANDUNG PASTEUR, an IHG Hotel', 'de04ca32-491a-4d75-aadc-03a7df2f44cb', 'b893f282-4d72-4656-ae3c-ce84cea2afee', 'OnlineTicketing.bookingitem.core.BookingItemImpl', 'b893f282-4d72-4656-ae3c-ce84cea2afee'),
        ('<p>AC, Restaurant, 24-Hour Front Desk, Parking, Elevator, WiFi</p>', 'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10002800-b0372f6e6073d67f968d69291ea77be3.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-332,pr-true,q-80,w-480', 'Jalan Ciumbuleuit No.50-58, Ciumbuleuit, Bandung, Jawa Barat, Indonesia, 40141', 'Harris Hotel & Conventions Ciumbuleuit Bandung', 'eb04fc3f-4967-4fda-ae97-c03a127a4608', '10733d22-719b-47fc-9c89-e584d40ca2f5', 'OnlineTicketing.bookingitem.core.BookingItemImpl', '10733d22-719b-47fc-9c89-e584d40ca2f5');


insert into public.bookingoption_comp (id, bookingtype, objectname, price, bookingitem_id, modulesequence)
values  ('dd1fc53c-fe09-4224-a5a0-3df4ec59715a', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 860000, 'f8596627-31c3-41df-a2be-2d5b6a148016', null),
        ('f57fe6ff-c80d-4365-9902-58dacdeb49dc', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 844000, 'fdec2748-9f84-4d41-95de-8e069e03a963', null),
        ('109dac25-1b89-4177-b5f5-aa1eaddffc36', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 844000, 'fdec2748-9f84-4d41-95de-8e069e03a963', 'bookingoption_impl, bookingoption_roomoption'),
        ('c9858318-c51f-4011-a06f-a07a67ffc5ae', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 910000, 'fdec2748-9f84-4d41-95de-8e069e03a963', null),
        ('f5beda66-d80b-4d2f-a78a-b504b21bb574', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 844000, 'fdec2748-9f84-4d41-95de-8e069e03a963', null),
        ('fc06dadc-0cfb-4079-b5af-50094b0e8adf', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 844000, 'fdec2748-9f84-4d41-95de-8e069e03a963', 'bookingoption_impl, bookingoption_roomoption'),
        ('47c8e2a2-d39d-41af-9c76-4e8f62a841c6', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 910000, 'fdec2748-9f84-4d41-95de-8e069e03a963', 'bookingoption_impl, bookingoption_roomoption'),
        ('4d0c8cd0-7b75-4134-aede-56a936004ffd', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 500000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', null),
        ('f532dbc0-145b-4910-9b5a-45d8bfc88431', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 310000, '3da8df91-6e9c-485f-89db-c325a87f1373', null),
        ('b22876fe-c217-41a9-8147-d96db70710fc', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 310000, '3da8df91-6e9c-485f-89db-c325a87f1373', 'bookingoption_impl, bookingoption_roomoption'),
        ('f95860d4-e5b7-4be5-a434-dd0e57e20a55', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 500000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', 'bookingoption_impl, bookingoption_roomoption'),
        ('334285e2-db25-41d5-82d8-ee0c86e65537', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 345000, '3da8df91-6e9c-485f-89db-c325a87f1373', null),
        ('8cfdeb26-c5c8-4904-ac62-ac82264370ab', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 345000, '3da8df91-6e9c-485f-89db-c325a87f1373', 'bookingoption_impl, bookingoption_roomoption'),
        ('70bb13a6-a6a5-4bed-a89f-df329b3e45be', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 3800000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', null),
        ('e0670b0e-a77a-4cf0-afe5-5b73ff09b0b1', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 3800000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'bookingoption_impl, bookingoption_roomoption'),
        ('5cb32dbf-3bc5-4310-8e2a-a298fffbec0e', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 860000, 'f8596627-31c3-41df-a2be-2d5b6a148016', 'bookingoption_impl, bookingoption_roomoption'),
        ('3471df41-5b4b-4268-b8bd-51d4b339cd58', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 3800000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', null),
        ('98029446-fd35-4008-92b3-7aa803799a1e', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 3800000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'bookingoption_impl, bookingoption_roomoption'),
        ('00bbebb0-d688-436e-9da0-2779004dac0a', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 600000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', null),
        ('56cd5c3a-9669-4d9d-89c6-062eef53e18a', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 5700000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', null),
        ('6d35982f-cb5b-41e9-9bfb-80f1b83ce900', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 5700000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'bookingoption_impl, bookingoption_roomoption'),
        ('372f6171-fe24-417e-b4b4-f6da263d38cd', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 600000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', 'bookingoption_impl, bookingoption_roomoption'),
        ('423be5d1-12d3-4af2-8681-3cf02a38b6e2', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 12880000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', null),
        ('2e889d77-eb8d-4c7f-9805-0e2d42c37855', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 12880000, 'f4c34579-1cc4-434c-a68c-4184c3e8a1eb', 'bookingoption_impl, bookingoption_roomoption'),
        ('d685bd78-e555-4767-9818-491d1c76af12', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 1050000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', null),
        ('3206cfba-b4d5-4ee8-b03a-c963fb15ad2f', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 1050000, 'bab39892-7a8b-4636-bce5-0a58ef5b399c', 'bookingoption_impl, bookingoption_roomoption'),
        ('d0b5e99f-0616-4967-abfc-35a20fee2e47', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 1220000, 'f8596627-31c3-41df-a2be-2d5b6a148016', 'bookingoption_impl'),
        ('024698ae-4a69-44de-971c-44152f9c1f2c', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 1220000, 'f8596627-31c3-41df-a2be-2d5b6a148016', 'bookingoption_impl'),
        ('047a7ecb-0ed4-4878-80d4-7be2a4f5473d', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 900000, 'f8596627-31c3-41df-a2be-2d5b6a148016', null),
        ('f70bd779-311d-4b39-8676-5ff25c674bc1', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 900000, 'f8596627-31c3-41df-a2be-2d5b6a148016', 'bookingoption_impl, bookingoption_roomoption'),
        ('5601cd81-b625-4848-a9f6-6540fd71811f', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 767000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', null),
        ('1bd94483-9983-4036-be6e-987f68dd7ba3', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 767000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', 'bookingoption_impl, bookingoption_roomoption'),
        ('cc5949f2-3561-4b6b-90e3-24c6ba69ec31', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 800000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', null),
        ('e966a897-defc-4831-a667-3a5358bdbff9', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 800000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', 'bookingoption_impl, bookingoption_roomoption'),
        ('50c020a8-7bf6-49e5-b738-a3e84a0b59f8', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 1120000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', null),
        ('9fed901b-f885-4e10-a1b9-b1db73c771d4', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 1120000, 'de04ca32-491a-4d75-aadc-03a7df2f44cb', 'bookingoption_impl, bookingoption_roomoption'),
        ('469a6ecb-b5a0-4bc5-8e6a-c6a0ba6a996b', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 1100000, 'eb04fc3f-4967-4fda-ae97-c03a127a4608', null),
        ('ffe6190f-5701-4e05-b569-9ef13c407d38', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 1100000, 'eb04fc3f-4967-4fda-ae97-c03a127a4608', 'bookingoption_impl, bookingoption_roomoption'),
        ('97b62ddf-88b8-48e7-83df-54afb25e0351', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 776000, '79396b24-43d1-4da8-9abb-f9880579a193', null),
        ('0db2a4a4-4b60-464f-9523-b730f076e11d', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 776000, '79396b24-43d1-4da8-9abb-f9880579a193', 'bookingoption_impl, bookingoption_roomoption'),
        ('0bc9a3c1-02a9-434d-b5a1-e08b9e8b844e', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 770000, 'eb04fc3f-4967-4fda-ae97-c03a127a4608', null),
        ('3c89eb1c-9d5b-4c33-b2ec-15ac89aaf1be', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 770000, 'eb04fc3f-4967-4fda-ae97-c03a127a4608', 'bookingoption_impl, bookingoption_roomoption'),
        ('e962f886-187d-4ee3-ab2c-11e9bb317205', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 585000, '79396b24-43d1-4da8-9abb-f9880579a193', null),
        ('37cd447c-9691-4aab-a060-e83e8342413c', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 585000, '79396b24-43d1-4da8-9abb-f9880579a193', 'bookingoption_impl, bookingoption_roomoption'),
        ('03d06dd0-b66f-4f03-a114-98f8e675b83b', 'HOTEL', 'OnlineTicketing.bookingoption.roomoption.BookingOptionImpl', 859000, '79396b24-43d1-4da8-9abb-f9880579a193', null),
        ('6c19e209-42e4-4c9d-a8b1-847af374a406', 'HOTEL', 'OnlineTicketing.bookingoption.core.BookingOptionComponent', 859000, '79396b24-43d1-4da8-9abb-f9880579a193', 'bookingoption_impl, bookingoption_roomoption');


insert into public.bookingoption_impl (id)
values  ('109dac25-1b89-4177-b5f5-aa1eaddffc36'),
        ('fc06dadc-0cfb-4079-b5af-50094b0e8adf'),
        ('47c8e2a2-d39d-41af-9c76-4e8f62a841c6'),
        ('b22876fe-c217-41a9-8147-d96db70710fc'),
        ('8cfdeb26-c5c8-4904-ac62-ac82264370ab'),
        ('e0670b0e-a77a-4cf0-afe5-5b73ff09b0b1'),
        ('98029446-fd35-4008-92b3-7aa803799a1e'),
        ('6d35982f-cb5b-41e9-9bfb-80f1b83ce900'),
        ('2e889d77-eb8d-4c7f-9805-0e2d42c37855'),
        ('f95860d4-e5b7-4be5-a434-dd0e57e20a55'),
        ('372f6171-fe24-417e-b4b4-f6da263d38cd'),
        ('3206cfba-b4d5-4ee8-b03a-c963fb15ad2f'),
        ('5cb32dbf-3bc5-4310-8e2a-a298fffbec0e'),
        ('d0b5e99f-0616-4967-abfc-35a20fee2e47'),
        ('024698ae-4a69-44de-971c-44152f9c1f2c'),
        ('f70bd779-311d-4b39-8676-5ff25c674bc1'),
        ('1bd94483-9983-4036-be6e-987f68dd7ba3'),
        ('e966a897-defc-4831-a667-3a5358bdbff9'),
        ('9fed901b-f885-4e10-a1b9-b1db73c771d4'),
        ('3c89eb1c-9d5b-4c33-b2ec-15ac89aaf1be'),
        ('ffe6190f-5701-4e05-b569-9ef13c407d38'),
        ('37cd447c-9691-4aab-a060-e83e8342413c'),
        ('0db2a4a4-4b60-464f-9523-b730f076e11d'),
        ('6c19e209-42e4-4c9d-a8b1-847af374a406');

insert into public.bookingoption_roomoption (roomtype, id, record_id, recordname, base_component_id, imageurl)
values  ('Studio Eksekutif', 'f57fe6ff-c80d-4365-9902-58dacdeb49dc', '109dac25-1b89-4177-b5f5-aa1eaddffc36', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '109dac25-1b89-4177-b5f5-aa1eaddffc36', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/04/20/391563b8-f125-4ebd-af75-11acda1b9df6-1681933347772-1a1ec32196e6b275849ad7ef2ae80d51.jpg'),
        ('One Bedroom Executive Twin', 'f5beda66-d80b-4d2f-a78a-b504b21bb574', 'fc06dadc-0cfb-4079-b5af-50094b0e8adf', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'fc06dadc-0cfb-4079-b5af-50094b0e8adf', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2025/01/08/862a5ca5-9160-4e41-8cbe-c6d788fa5970-1736334302315-f86fc4ee523f3223e3f1fa5ed6b41be9.jpg'),
        ('Studio Premier', 'c9858318-c51f-4011-a06f-a07a67ffc5ae', '47c8e2a2-d39d-41af-9c76-4e8f62a841c6', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '47c8e2a2-d39d-41af-9c76-4e8f62a841c6', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/04/18/ca7e6686-1827-483f-ab4c-e860f74c01d0-1681785357574-ade252089c6054913ab737af19030352.jpg'),
        ('Deluxe Twin Room', 'f532dbc0-145b-4910-9b5a-45d8bfc88431', 'b22876fe-c217-41a9-8147-d96db70710fc', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'b22876fe-c217-41a9-8147-d96db70710fc', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/12/af287465-4ed5-4c58-b63c-f942b4f73217-1626077121467-0e0b9c357325475d1a62c1a70dbbcb33.jpg'),
        ('Deluxe Queen Room', '334285e2-db25-41d5-82d8-ee0c86e65537', '8cfdeb26-c5c8-4904-ac62-ac82264370ab', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '8cfdeb26-c5c8-4904-ac62-ac82264370ab', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/07/12/a362bfd9-2393-4cad-aadb-0dcd8246f73e-1626077121486-bab773a33a13f7981ac383962d86996d.jpg'),
        ('Deluxe Cityscape King Room', '70bb13a6-a6a5-4bed-a89f-df329b3e45be', 'e0670b0e-a77a-4cf0-afe5-5b73ff09b0b1', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'e0670b0e-a77a-4cf0-afe5-5b73ff09b0b1', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2024/11/05/aee9f328-82ee-41b1-9539-bb55875b84e8-1730794564358-829eeefbc388c6363778f04a41ed95a1.jpg'),
        ('Deluxe Cityscape Twin Room', '3471df41-5b4b-4268-b8bd-51d4b339cd58', '98029446-fd35-4008-92b3-7aa803799a1e', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '98029446-fd35-4008-92b3-7aa803799a1e', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/09/18/43dd1df8-6847-4e02-8d52-64bbb73c9bcf-1695008904726-176fbd0ce616c55ee01d9b14758b3c94.jpg'),
        ('Executive King Room', '56cd5c3a-9669-4d9d-89c6-062eef53e18a', '6d35982f-cb5b-41e9-9bfb-80f1b83ce900', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '6d35982f-cb5b-41e9-9bfb-80f1b83ce900', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/02/06/ccbddee5-78ac-4a23-a2e7-9b889875f59f-1675684000659-4f5c6363163a469db0111367d7fb35de.jpg'),
        ('Langham One Bedroom Suite', '423be5d1-12d3-4af2-8681-3cf02a38b6e2', '2e889d77-eb8d-4c7f-9805-0e2d42c37855', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '2e889d77-eb8d-4c7f-9805-0e2d42c37855', 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/02/06/0ad83578-0d57-4f81-9f6d-8da5f5df1bff-1675683102055-da72e2868d9ab424fe81113cfae7947d.jpg'),
        ('Superior Twin', '4d0c8cd0-7b75-4134-aede-56a936004ffd', 'f95860d4-e5b7-4be5-a434-dd0e57e20a55', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'f95860d4-e5b7-4be5-a434-dd0e57e20a55', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007371-7231a41cb5f292f070c8f8471170c9ca.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Deluxe Double', '00bbebb0-d688-436e-9da0-2779004dac0a', '372f6171-fe24-417e-b4b4-f6da263d38cd', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '372f6171-fe24-417e-b4b4-f6da263d38cd', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007371-d10012d7c9c42bfd7add120810f9ec68.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Suite', 'd685bd78-e555-4767-9818-491d1c76af12', '3206cfba-b4d5-4ee8-b03a-c963fb15ad2f', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '3206cfba-b4d5-4ee8-b03a-c963fb15ad2f', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007371-c7decaaf72e72dac5ad0068bd16ccb7b.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Deluxe Twin Bed', 'dd1fc53c-fe09-4224-a5a0-3df4ec59715a', '5cb32dbf-3bc5-4310-8e2a-a298fffbec0e', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '5cb32dbf-3bc5-4310-8e2a-a298fffbec0e', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005565-1000x667-FIT_AND_TRIM-3d4f0558ae07b5075ee943506e790e70.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Deluxe King Bed', '047a7ecb-0ed4-4878-80d4-7be2a4f5473d', 'f70bd779-311d-4b39-8676-5ff25c674bc1', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'f70bd779-311d-4b39-8676-5ff25c674bc1', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005565-1000x667-FIT_AND_TRIM-3676b5379d884a6d10c582c9da76a89c.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Standard', '5601cd81-b625-4848-a9f6-6540fd71811f', '1bd94483-9983-4036-be6e-987f68dd7ba3', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '1bd94483-9983-4036-be6e-987f68dd7ba3', 'https://ik.imagekit.io/tvlk/generic-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/5/0/90/762/816/BDOPA_4959011581_P.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('2 Single Standard', 'cc5949f2-3561-4b6b-90e3-24c6ba69ec31', 'e966a897-defc-4831-a667-3a5358bdbff9', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'e966a897-defc-4831-a667-3a5358bdbff9', 'https://ik.imagekit.io/tvlk/generic-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/7/0/158/431/69/BDOPA_8753775335_P.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('1 King Premium', '50c020a8-7bf6-49e5-b738-a3e84a0b59f8', '9fed901b-f885-4e10-a1b9-b1db73c771d4', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '9fed901b-f885-4e10-a1b9-b1db73c771d4', 'https://ik.imagekit.io/tvlk/generic-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/5/0/90/762/803/BDOPA_4958329164_P.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Harris Unique', '0bc9a3c1-02a9-434d-b5a1-e08b9e8b844e', '3c89eb1c-9d5b-4c33-b2ec-15ac89aaf1be', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '3c89eb1c-9d5b-4c33-b2ec-15ac89aaf1be', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002800-fedbb226210e084dff3564b1102bb036.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Harris Suite', '469a6ecb-b5a0-4bc5-8e6a-c6a0ba6a996b', 'ffe6190f-5701-4e05-b569-9ef13c407d38', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', 'ffe6190f-5701-4e05-b569-9ef13c407d38', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002800-2048x1364-FIT_AND_TRIM-02e7c88906a79b9c2ae6265d47eab2ce.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-460,pr-true,q-40,w-724'),
        ('Superior', 'e962f886-187d-4ee3-ab2c-11e9bb317205', '37cd447c-9691-4aab-a060-e83e8342413c', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '37cd447c-9691-4aab-a060-e83e8342413c', 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10006970-4aca96714a97c87bdef537a9323a8155.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320'),
        ('Deluxe', '97b62ddf-88b8-48e7-83df-54afb25e0351', '0db2a4a4-4b60-464f-9523-b730f076e11d', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '0db2a4a4-4b60-464f-9523-b730f076e11d', 'https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10006970-75ae1fa4effc33c745ff69fd593d0374.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320'),
        ('Deluxe Premier', '03d06dd0-b66f-4f03-a114-98f8e675b83b', '6c19e209-42e4-4c9d-a8b1-847af374a406', 'OnlineTicketing.bookingoption.core.BookingOptionImpl', '6c19e209-42e4-4c9d-a8b1-847af374a406', 'https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10006970-8906f9c1f934234075e68f606e735582.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320');


insert into public.order_comp (orderid, createdat, enddate, objectname, quantity, startdate, totalprice, bookingoption_id, customer_customerid, modulesequence)
values  ('77574310-4dd3-42bf-b265-42e4ef7cc791', '2025-06-02 04:29:01.313039', '2025-06-03', 'OnlineTicketing.order.core.OrderImpl', 1, '2025-06-02', 910000, 'c9858318-c51f-4011-a06f-a07a67ffc5ae', '2ea9ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl'),
        ('3259ee2b-36a3-4a0f-b6da-2d8f54a1c51f', '2025-06-02 04:29:44.242267', '2025-05-08', 'OnlineTicketing.order.core.OrderImpl', 2, '2025-05-06', 1380000, '334285e2-db25-41d5-82d8-ee0c86e65537', '2ea9ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');


insert into public.order_impl (orderid)
values  ('77574310-4dd3-42bf-b265-42e4ef7cc791'),
        ('3259ee2b-36a3-4a0f-b6da-2d8f54a1c51f');